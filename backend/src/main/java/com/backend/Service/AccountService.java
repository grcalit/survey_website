package com.backend.Service;

import org.springframework.stereotype.Service;

import com.backend.Entity.Account;
import com.backend.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.transaction.Transactional;

@Service
public class AccountService {
    private final AccountRepository accountRepository;
    private final Topic1Repository topic1Repository;
    private final Topic2Repository topic2Repository;
    private final Topic3Repository topic3Repository;
    private final Topic4Repository topic4Repository;

    @Autowired
    public AccountService(AccountRepository accountRepository, Topic1Repository topic1Repository, Topic2Repository topic2Repository, Topic3Repository topic3Repository, Topic4Repository topic4Repository) {
        this.accountRepository = accountRepository;
        this.topic1Repository = topic1Repository;
        this.topic2Repository = topic2Repository;
        this.topic3Repository = topic3Repository;
        this.topic4Repository = topic4Repository;
    }

    public Account addAccount(Account account) {
        if (account.getId() != null) {
            return null;
        }
        String email = account.getEmail();
        String password = account.getPassword();
        if (email.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$") & password.matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$")) {
            return accountRepository.save(account);
        }
        return null;
    }

    public Account getAccount(int id) {
        return accountRepository.findById(id).orElse(null);
    }

    public Account editAccount(Account account) {
        int id = account.getId();
        String email = account.getEmail();
        String password = account.getPassword();
        Account foundAccount = accountRepository.findByIdAndEmail(id, email).orElse(null);
        if (foundAccount != null) {
            foundAccount.setPassword(password);
            return accountRepository.save(foundAccount);
        }
        return null;
    }

    @Transactional
    public Integer deleteAccount(int id) {
        if (accountRepository.existsById(id)) {
            accountRepository.deleteById(id);
            topic1Repository.deleteByAccountId(id);
            topic2Repository.deleteByAccountId(id);
            topic3Repository.deleteByAccountId(id);
            topic4Repository.deleteByAccountId(id);
            return id;
        }
        return null;
    }
}
