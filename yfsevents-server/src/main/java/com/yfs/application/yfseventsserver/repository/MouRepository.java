package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Mou;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "mou",path = "mou")
public interface MouRepository extends JpaRepository<Mou,Long> {

    @Modifying
    @Query("delete from Mou a where a.id = ?1")
    void delete(Long id);
}
