package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Mou;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "mou",path = "mou")
public interface MouRepository extends PagingAndSortingRepository<Mou,Long> {
}
