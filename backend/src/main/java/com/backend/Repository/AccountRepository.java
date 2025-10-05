package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.Entity.Account;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Integer>{
    Account getById(int id);
    Optional<Account> findByIdAndEmail(int id, String email);
    boolean existsByIdAndEmail(int id, String email);
    Optional<Account> findByEmailAndPassword(String email, String password);
}
