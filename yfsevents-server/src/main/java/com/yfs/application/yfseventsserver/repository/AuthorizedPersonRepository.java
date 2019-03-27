package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.AuthorizedPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "authrizedperson", path = "authrizedperson")
public interface AuthorizedPersonRepository extends JpaRepository<AuthorizedPerson, Long> {

    @Modifying
    @Query("delete from AuthorizedPerson a where a.id = ?1")
    void delete(Long id);
}
