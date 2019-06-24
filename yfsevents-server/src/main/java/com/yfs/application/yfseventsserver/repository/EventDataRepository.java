package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


@RepositoryRestResource(collectionResourceRel = "event",path = "event")
public interface EventDataRepository extends JpaRepository<Event, Long> {


    @Query(value = "SELECT * FROM Event i where  i.id  = :id", nativeQuery = true)
    Optional<Event> findEventById(@Param("id") Long id);

}
