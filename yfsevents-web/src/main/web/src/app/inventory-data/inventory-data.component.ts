import { Component, OnInit, PLATFORM_ID, Injector, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventorydataService } from './inventorydata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-inventory-data',
  templateUrl: './inventory-data.component.html',
  styleUrls: ['./inventory-data.component.css']
})
export class InventoryDataComponent implements OnInit {
  inventoryData: FormGroup;
  eventCategoryList: any[];
  selected: any;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private inventoryService: InventorydataService,
    private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {

    this.inventoryData = this.formBuilder.group({
      itemName: ['', [
        Validators.required, Validators.maxLength(50)
      ]],
      eventCategory: [''],
      comments: ['', [
        Validators.required, Validators.maxLength(200)
      ]],

    });

    this.inventoryService.getEventCategoryList().subscribe((data: any) => {
      this.eventCategoryList = data;
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });

    if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
      this.inventoryService.getInventoryDataById(this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
        this.inventoryData.setValue({
          itemName: data.itemName,
          eventCategory: data.eventCategory,
          comments: data.comments
        })
      }, (err: HttpErrorResponse) => {
        console.log(err.message)
      })
    }
  }

  checkForMandatoryValidations(inventoryData) {
    if (inventoryData.itemName && inventoryData.eventCategory && inventoryData.comments)
      return true;
    else
      return false;

  }

  onSubmit() {
    const inventoryData = this.inventoryData.getRawValue();
    if (this.checkForMandatoryValidations(inventoryData)) {
      this.loading = true;

      if (this.route.snapshot.paramMap && this.route.snapshot.paramMap.get('id')) {
        this.inventoryService.updateInventoryDataById(inventoryData, this.route.snapshot.paramMap.get('id')).subscribe((data: any) => {
          this.loading = false;
          console.log('response', data);
          alert('Succesfully updated Inventory Data');
          this.router.navigateByUrl("/inventorylist");
        }, e => {
          this.loading = false;
          console.log(e);
        });

      }
      else {
        this.inventoryService.saveInventoryData(inventoryData).subscribe((data: any) => {
          this.loading = false;
          console.log('response', data);
          alert('Succesfully saved Inventory Data');
          this.router.navigateByUrl("/inventorylist");
        }, e => {
          this.loading = false;
          console.log(e);
        });
      }
    }
    else {
      alert('Please fill out the mandatory fields');
    }

  }



}
