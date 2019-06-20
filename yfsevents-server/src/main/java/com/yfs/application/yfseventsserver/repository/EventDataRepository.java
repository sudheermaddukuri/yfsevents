package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "event",path = "event")
public interface EventDataRepository extends JpaRepository<Event, Long> {


    @Query("select e from Event e JOIN VolunteersAccepted v on v.eventId = e.id where v.mailId = ?1 and v.accepted=true")
    Iterable<Event> getRegisteredEvents(String user);
}
