package com.hackathon.elitecoders.auth.constants;

public class ApiConstants {

    public static final String ROOT_URL_HACK = "/hack";

    public static final String ROOT_URL_SAMPLE = "/sample";

    public static final String AUTH = "/auth";

    public static final String EMPTY = "";

    public static final String METHOD_BY_ID = "/{id}";

    public static final String USER_TYPE = "/{user-type}";

    public static final String LOGIN = "/login";
    public  static final String CREATE = "/create";

    public  static final String GET_RESPONSIBILITY_BY_ID = "/get/{responsibilityId}";
    public  static final String GET_TECHNICALSKILLS_BY_ID = "/get/{technicalSkillId}";

    public  static final String GET = "/get";

    public  static final String UPDATE_RESPONSIBILITY = "/update/{responsibilityId}";
    public  static final String UPDATE_TECHNICALSKILLS = "/update/{technicallSkillId}";

    public  static final String DELETE_RESPONSIBILITY = "/delete/{responsibilityId}";

    public  static final String DELETE_TECHNICALSKILL = "/delete/{technicalSkillId}";


    public static final String REFRESH_TOKEN = "/refresh-token";

    public static final String REGISTER = "/register";

    public static final String TEST = "/test";

    public static final String USERS = "/users";

    public static final String USERS_BY_ID = USERS + METHOD_BY_ID;

    public static final String ADMINS = "/admins";

    public static final String ADMINS_BY_ID = ADMINS + METHOD_BY_ID;

    public static final String ROOT_URL_AUTH = ROOT_URL_HACK + AUTH;
    public static final String SUMMARY = "summary";
    public static final String ROOT_PROFESSIONAL_SUMMERY = ROOT_URL_AUTH +"professionsummary";
    public static final String LOGIN_URL = USER_TYPE + LOGIN;
    public static final String REFRESH_TOKEN_URL = USER_TYPE + REFRESH_TOKEN;
    public static final String REGISTER_TOKEN_URL = USER_TYPE + REGISTER;
    public static final String ROOT_URL_TEST = ROOT_URL_HACK + TEST;
    public static final String PROJECT_DETAILS_URL = ROOT_URL_TEST + "/project-info";
    public static final String PROJECT_DETAILS_UPDATE_URL = ROOT_URL_TEST + "/update-project/{id}";
    public static final String PROJECT_DETAILS_BY_ID = PROJECT_DETAILS_URL + "/{id}";

    public static final String PROJECT_DELETE_BY_ID = PROJECT_DETAILS_URL + "/{id}";

    public static final String URL_RESPONSIBILITY = "/responsibility";
    public static final String URL_ENVIRONMENT = "/environment";

    public static final String URL_TECHNICAL_SKILLS = "/technicalSkills";



}
