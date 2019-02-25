package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.AuthorizedPerson;
import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "authrizedperson", path = "authrizedperson")
public interface AuthorizedPersonRepository extends PagingAndSortingRepository<AuthorizedPerson, Long> {
}
