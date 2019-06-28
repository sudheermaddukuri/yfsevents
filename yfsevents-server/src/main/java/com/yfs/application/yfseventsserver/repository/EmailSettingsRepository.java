package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.EmailSettings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailSettingsRepository extends JpaRepository<EmailSettings, Integer> {

}
