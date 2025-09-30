package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.Entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long>{
    
}
