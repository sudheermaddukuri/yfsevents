package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;


@RepositoryRestResource(collectionResourceRel = "event",path = "event")
public interface EventDataRepository extends JpaRepository<Event, Long> {



}
