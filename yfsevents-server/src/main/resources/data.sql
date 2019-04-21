insert into partner_ngo (id,name ) values(1, 'test ngo 1');
insert into partner_ngo (id,name ) values(2, 'test ngo 2');

insert into authorized_person(id, name, partner_ngo_id) values (1, 'test person 1', 1);
insert into authorized_person(id, name, partner_ngo_id) values (2, 'test person 2', 2);


insert into user (id, username, password, role) values (1, 'admin', '{noop}admin', 'ROLE_ADMIN');
insert into user (id, username, password, role) values (2, 'user', '{noop}user', 'ROLE_USER');


INSERT INTO VOLUNTEER(CITY,EMAIL,FIRST_NAME,LAST_NAME,LOCALITY,PHONE_NUMBER,PHONE_PREFIX,PINCODE,STATE)  VALUES ( 'jammu','rainatushar221995@gmail.com','Tushar','Raina','locality','8146222129','91','31274','j&k' );
INSERT INTO VOLUNTEER(CITY,EMAIL,FIRST_NAME,LAST_NAME,LOCALITY,PHONE_NUMBER,PHONE_PREFIX,PINCODE,STATE)  VALUES ( 'hyd','ranom22@gmail.com','T','Raina','locality','3434344343','91','31274','Hyerabad' );
INSERT INTO EVENT(ID,COMMENTS,EVENT_NAME,EVENTFROM_TIME,EVENTTO_TIME,NGO_NAME,VOLUNTEERS) VALUES(1,'comments','name','
2019-04-02 09:15:25.200','
2019-04-02 09:15:25.200','ngo',23);


--INSERT INTO STAGING_EMAIL(ID_EVENT, TX_PAYLOAD, TX_STATUS, NM_RETRY_COUNT, DT_CREATED, DT_UPDATED, ID_CREATED_BY, ID_UPDATED_BY, REASON)
--VALUES (1, '{"to":"akulavij@gmail.com","toMultiple":null,"subject":"Subject1","text":"Some Body text1","bcc":null,"cc":null,"eventId":1}', 'NOT_STARTED',0,sysdate,sysdate,'ADMIN','ADMIN',null);


