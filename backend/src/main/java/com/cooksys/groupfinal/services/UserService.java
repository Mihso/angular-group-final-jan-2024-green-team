package com.cooksys.groupfinal.services;

import com.cooksys.groupfinal.dtos.CredentialsDto;
import com.cooksys.groupfinal.dtos.FullUserDto;
import com.cooksys.groupfinal.dtos.UserRequestDto;

public interface UserService {

	FullUserDto login(CredentialsDto credentialsDto);

	FullUserDto createUser(Long id, UserRequestDto userRequest);

	FullUserDto deleteUsers(CredentialsDto cred, Long id, Long userId);

   
}
