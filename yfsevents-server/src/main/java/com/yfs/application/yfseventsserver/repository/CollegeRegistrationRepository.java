package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.CollegeRegistration;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "collegeregistration",path = "collegeregistration")
public interface CollegeRegistrationRepository extends PagingAndSortingRepository<CollegeRegistration,Long> {

    @Query(value = "SELECT c.NAME,m.MOU_NAME FROM college_registration c , mou m WHERE c.id = m.mou_id_id",nativeQuery = true)
    List<Object> getCollegeMou();
}
