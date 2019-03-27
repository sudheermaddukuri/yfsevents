insert into partner_ngo (id,name ) values(1, 'test ngo 1');
insert into partner_ngo (id,name ) values(2, 'test ngo 2');

insert into authorized_person(id, name, partner_ngo_id) values (1, 'test person 1', 1);
insert into authorized_person(id, name, partner_ngo_id) values (2, 'test person 2', 2);

insert into User (id, username, password) values (1, 'admin', 'admin');

