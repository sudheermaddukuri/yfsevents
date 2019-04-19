package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Event;
import com.yfs.application.yfseventsserver.entity.StagingEmail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource(collectionResourceRel = "stagingemail",path = "stagingemail")
public interface StagingEmailDataRepository extends JpaRepository<StagingEmail, Long> {

    @Query(value = "SELECT * FROM STAGING_EMAIL WHERE  NM_RETRY_COUNT <= :maxRetryCount AND TX_STATUS NOT IN ('FAILED','COMPLETED') ORDER BY DT_CREATED", nativeQuery = true)
    List<StagingEmail> getStagingEmailsEligibleToProcess(int maxRetryCount);

    @Query(value = "Select * from STAGING_EMAIL where id_event=:eventId and tx_status not in ('FAILED','COMPLETED')", nativeQuery = true)
    List<StagingEmail>  getStagingEmailByEventId(long eventId);
}
