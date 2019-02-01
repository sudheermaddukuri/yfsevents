package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.PartnerNgo;
import com.yfs.application.yfseventsserver.entity.Volunteer;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "partnerngo", path = "partnerngo")
public interface PartnerNgoRepository extends PagingAndSortingRepository<PartnerNgo, Long> {
}
