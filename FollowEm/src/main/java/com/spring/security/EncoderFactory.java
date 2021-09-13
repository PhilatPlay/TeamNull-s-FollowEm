package com.spring.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/*
 * Two methods:
 * encode(String rawPassword) -> hashes a password and stores the salt in the hash
 * matches(String rawPassword, String encodedPassword) -> hashes a raw password and checks to see if it matches the given hash
 * The encoder is smart. It will generate a unique hash each time it's run, but it will always be able to tell
 * whether a given password would have generated the provided hash.
 * 
 * //These will return 3 different hashes
 * hash1 = encode(password);
 * hash2 = encode(password);
 * hash3 = encode(password);
 * 
 * //These will all return true
 * matches(password, hash1);
 * matches(password, hash2);
 * matches(password, hash3);
 */

public class EncoderFactory {
	private static PasswordEncoder encoder;
	
	public static PasswordEncoder getPasswordEncoder() {
		if(encoder==null) {
			encoder = new BCryptPasswordEncoder();
		}
		return encoder;
	}
}
