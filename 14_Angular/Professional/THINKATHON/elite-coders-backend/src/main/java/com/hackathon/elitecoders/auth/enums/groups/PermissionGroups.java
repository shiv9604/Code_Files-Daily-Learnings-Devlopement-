package com.hackathon.elitecoders.auth.enums.groups;

public enum PermissionGroups {

    USER("USERS"),

    ADMIN("ADMIN");

    public final String name;

    PermissionGroups(String name) {
        this.name = name;
    }

}
