package com.hackathon.elitecoders.auth.constants;

public class ResponseErrors {

    public static final String INVALID_CREDENTIAL = "Provided credentials are invalid.";

    public static final String INVALID_ACCESS_TOKEN = "Provided access token is invalid.";

    public static final String EXPIRED_ACCESS_TOKEN = "Provided access token has expired. Please refresh token or login again.";

    public static final String INVALID_REFRESH_TOKEN = "Provided refresh token is invalid or expired.";

    public static final String INACTIVE_USER = "Inactive user. Please contact admin to activate account.";

    public static final String SAMPLE_ENTITY_NOT_EXIST = "Sample entity does not exist ";

    public static final String PROJECT_ENTITY_NOT_FOUND = "Project entity does not found ";

    public static final String EMPLOYEE_ENTITY_NOT_EXIST = "Employee does not exist ";
    public static final String PROJECT_NAME_EXIST = "Project name already exist. Please enter another.";
    public static final String PROJECT_DELETED = "Project deleted successfully.";

}
