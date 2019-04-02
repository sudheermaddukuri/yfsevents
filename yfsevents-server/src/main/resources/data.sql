insert into partner_ngo (id,name ) values(1, 'test ngo 1');
insert into partner_ngo (id,name ) values(2, 'test ngo 2');

insert into authorized_person(id, name, partner_ngo_id) values (1, 'test person 1', 1);
insert into authorized_person(id, name, partner_ngo_id) values (2, 'test person 2', 2);


insert into User (id, username, password, role) values (1, 'admin', '{noop}admin', 'ROLE_ADMIN');

INSERT INTO VOLUNTEER(CITY,EMAIL,FIRST_NAME,LAST_NAME,LOCALITY,PHONE_NUMBER,PHONE_PREFIX,PINCODE,STATE)  VALUES ( 'jammu','rainatushar221995@gmail.com','Tushar','Raina','locality','8146222129','91','31274','j&k' );
INSERT INTO VOLUNTEER(CITY,EMAIL,FIRST_NAME,LAST_NAME,LOCALITY,PHONE_NUMBER,PHONE_PREFIX,PINCODE,STATE)  VALUES ( 'hyd','ranom22@gmail.com','T','Raina','locality','3434344343','91','31274','Hyerabad' );
INSERT INTO EVENT(ID,COMMENTS,EVENT_NAME,EVENTFROM_TIME,EVENTTO_TIME,NGO_NAME,VOLUNTEERS) VALUES(1,'comments','name','
2019-04-02 09:15:25.200','
2019-04-02 09:15:25.200','ngo',23)
