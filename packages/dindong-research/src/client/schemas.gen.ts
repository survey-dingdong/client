// This file is auto-generated by @hey-api/openapi-ts

export const $ChangePasswordRequest = {
    properties: {
        oldPassword: {
            type: 'string',
            format: 'password',
            title: 'Old Password',
            description: 'Origin Password',
            writeOnly: true
        },
        newPassword: {
            type: 'string',
            format: 'password',
            title: 'New Password',
            description: 'New Password',
            writeOnly: true
        }
    },
    type: 'object',
    required: ['oldPassword', 'newPassword'],
    title: 'ChangePasswordRequest'
} as const;

export const $CreateProjectRequest = {
    properties: {
        title: {
            type: 'string',
            maxLength: 20,
            minLength: 1,
            title: 'Title',
            description: 'Title'
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CreateProjectRequest'
} as const;

export const $CreateProjectResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        }
    },
    type: 'object',
    required: ['id'],
    title: 'CreateProjectResponse'
} as const;

export const $CreateUserRequest = {
    properties: {
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
            description: 'Email'
        },
        password: {
            type: 'string',
            format: 'password',
            title: 'Password',
            description: 'Password',
            writeOnly: true
        },
        username: {
            type: 'string',
            title: 'Username',
            description: 'Username'
        }
    },
    type: 'object',
    required: ['email', 'password', 'username'],
    title: 'CreateUserRequest'
} as const;

export const $CreateUserResponse = {
    properties: {
        token: {
            type: 'string',
            title: 'Token',
            description: 'Token'
        }
    },
    type: 'object',
    required: ['token'],
    title: 'CreateUserResponse'
} as const;

export const $CreateWorkspaceRequest = {
    properties: {
        title: {
            type: 'string',
            title: 'Title',
            description: 'Title'
        }
    },
    type: 'object',
    required: ['title'],
    title: 'CreateWorkspaceRequest'
} as const;

export const $CreateWorkspaceResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        }
    },
    type: 'object',
    required: ['id'],
    title: 'CreateWorkspaceResponse'
} as const;

export const $EmailVerificationRequest = {
    properties: {
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
            description: 'Email'
        }
    },
    type: 'object',
    required: ['email'],
    title: 'EmailVerificationRequest'
} as const;

export const $EmailVerificationType = {
    type: 'string',
    enum: ['signup', 'resetPassword'],
    title: 'EmailVerificationType'
} as const;

export const $ExperimentAttendanceStatusTypeEnum = {
    type: 'string',
    enum: ['scheduled', 'notAttended', 'attended'],
    title: 'ExperimentAttendanceStatusTypeEnum'
} as const;

export const $ExperimentTimeslotRead = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        },
        startTime: {
            type: 'string',
            format: 'time',
            title: 'Start Time',
            description: 'Experiment start time'
        },
        endTime: {
            type: 'string',
            format: 'time',
            title: 'End Time',
            description: 'Experiment end time'
        },
        maxParticipants: {
            type: 'integer',
            title: 'Max Participants',
            description: 'Maximum number of exparticipants per session'
        }
    },
    type: 'object',
    required: ['id', 'startTime', 'endTime', 'maxParticipants'],
    title: 'ExperimentTimeslotRead'
} as const;

export const $ExperimentTimeslotRequest = {
    properties: {
        id: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Id',
            description: 'ID'
        },
        startTime: {
            type: 'string',
            format: 'time',
            title: 'Start Time',
            description: 'Experiment start time'
        },
        endTime: {
            type: 'string',
            format: 'time',
            title: 'End Time',
            description: 'Experiment end time'
        },
        maxParticipants: {
            type: 'integer',
            title: 'Max Participants',
            description: 'Maximum number of exparticipants per session'
        }
    },
    type: 'object',
    required: ['startTime', 'endTime', 'maxParticipants'],
    title: 'ExperimentTimeslotRequest'
} as const;

export const $ExperimentTypeEnum = {
    type: 'string',
    enum: ['online', 'offline'],
    title: 'ExperimentTypeEnum'
} as const;

export const $GetExperimentParticipantResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'Participant ID'
        },
        username: {
            type: 'string',
            title: 'Username',
            description: 'Username'
        },
        reservedDate: {
            type: 'string',
            title: 'Reserved Date',
            description: 'Reserved Date'
        },
        attendanceStatus: {
            allOf: [
                {
                    '$ref': '#/components/schemas/ExperimentAttendanceStatusTypeEnum'
                }
            ],
            description: 'Attendance Status'
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            title: 'Created At',
            description: 'Created datetime'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            title: 'Updated At',
            description: 'Updated datetime'
        }
    },
    type: 'object',
    required: ['id', 'username', 'reservedDate', 'attendanceStatus', 'createdAt', 'updatedAt'],
    title: 'GetExperimentParticipantResponse'
} as const;

export const $GetExperimentProjectResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        },
        title: {
            type: 'string',
            title: 'Title',
            description: 'Title'
        },
        description: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Description',
            description: 'Description'
        },
        isPublic: {
            type: 'boolean',
            title: 'Is Public',
            description: 'Whether the project is public'
        },
        startDate: {
            anyOf: [
                {
                    type: 'string',
                    format: 'date'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Start Date',
            description: 'Experiment start date'
        },
        endDate: {
            anyOf: [
                {
                    type: 'string',
                    format: 'date'
                },
                {
                    type: 'null'
                }
            ],
            title: 'End Date',
            description: 'Experiment end date'
        },
        excludedDates: {
            items: {
                type: 'string',
                format: 'date'
            },
            type: 'array',
            title: 'Excluded Dates',
            description: 'Experimental exclusion days'
        },
        experimentTimeslots: {
            items: {
                '$ref': '#/components/schemas/ExperimentTimeslotRead'
            },
            type: 'array',
            title: 'Experiment Timeslots',
            description: 'Time information of experiment'
        },
        maxParticipants: {
            type: 'integer',
            title: 'Max Participants',
            description: 'Maximum number of experiment participants'
        },
        experimentType: {
            '$ref': '#/components/schemas/ExperimentTypeEnum'
        },
        location: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Location',
            description: 'Experiment location'
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            title: 'Created At',
            description: 'Created datetime'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            title: 'Updated At',
            description: 'Updated datetime'
        }
    },
    type: 'object',
    required: ['id', 'title', 'isPublic', 'startDate', 'endDate', 'excludedDates', 'experimentTimeslots', 'maxParticipants', 'experimentType', 'location', 'createdAt', 'updatedAt'],
    title: 'GetExperimentProjectResponse'
} as const;

export const $GetProjectListResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        },
        workspaceId: {
            type: 'integer',
            title: 'Workspace Id',
            description: 'Workspace ID'
        },
        title: {
            type: 'string',
            title: 'Title',
            description: 'Title'
        },
        description: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Description',
            description: 'Description'
        },
        isPublic: {
            type: 'boolean',
            title: 'Is Public',
            description: 'Whether the project is public'
        },
        joinedParticipants: {
            type: 'integer',
            title: 'Joined Participants',
            description: 'Number of experiment participants'
        },
        maxParticipants: {
            type: 'integer',
            title: 'Max Participants',
            description: 'Maximum number of exparticipants per session'
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            title: 'Created At'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
            title: 'Updated At'
        }
    },
    type: 'object',
    required: ['id', 'workspaceId', 'title', 'isPublic', 'joinedParticipants', 'maxParticipants', 'createdAt', 'updatedAt'],
    title: 'GetProjectListResponse'
} as const;

export const $GetUserListResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        },
        email: {
            type: 'string',
            title: 'Email',
            description: 'Email'
        },
        username: {
            type: 'string',
            title: 'Username',
            description: 'username'
        },
        oauthAccounts: {
            items: {
                '$ref': '#/components/schemas/UserOauthResponse'
            },
            type: 'array',
            title: 'Oauth Accounts',
            description: 'oauth accounts'
        }
    },
    type: 'object',
    required: ['id', 'email', 'username', 'oauthAccounts'],
    title: 'GetUserListResponse'
} as const;

export const $GetWorkspaceListResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        },
        title: {
            type: 'string',
            title: 'Title',
            description: 'Title'
        },
        orderNo: {
            type: 'integer',
            title: 'Order No',
            description: 'Order'
        }
    },
    type: 'object',
    required: ['id', 'title', 'orderNo'],
    title: 'GetWorkspaceListResponse'
} as const;

export const $HTTPValidationError = {
    properties: {
        detail: {
            items: {
                '$ref': '#/components/schemas/ValidationError'
            },
            type: 'array',
            title: 'Detail'
        }
    },
    type: 'object',
    title: 'HTTPValidationError'
} as const;

export const $LoginRequest = {
    properties: {
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
            description: 'Email'
        },
        password: {
            type: 'string',
            format: 'password',
            title: 'Password',
            description: 'Password',
            writeOnly: true
        }
    },
    type: 'object',
    required: ['email', 'password'],
    title: 'LoginRequest'
} as const;

export const $LoginResponse = {
    properties: {
        token: {
            type: 'string',
            title: 'Token',
            description: 'Token'
        },
        refreshToken: {
            type: 'string',
            title: 'Refresh Token',
            description: 'Refresh token'
        }
    },
    type: 'object',
    required: ['token', 'refreshToken'],
    title: 'LoginResponse'
} as const;

export const $OauthLoginRequest = {
    properties: {
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
            description: 'Email'
        },
        username: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Username',
            description: 'User username'
        },
        oauthId: {
            type: 'string',
            title: 'Oauth Id',
            description: 'OAuth ID'
        }
    },
    type: 'object',
    required: ['email', 'oauthId'],
    title: 'OauthLoginRequest'
} as const;

export const $OauthProviderTypeEnum = {
    type: 'string',
    enum: ['google', 'facebook', 'github', 'kakao', 'naver'],
    title: 'OauthProviderTypeEnum'
} as const;

export const $ProjectTypeEnum = {
    type: 'string',
    enum: ['survey', 'experiment'],
    title: 'ProjectTypeEnum'
} as const;

export const $PutProjectRequest = {
    properties: {
        title: {
            type: 'string',
            maxLength: 20,
            minLength: 1,
            title: 'Title',
            description: 'Title'
        },
        description: {
            anyOf: [
                {
                    type: 'string',
                    maxLength: 512
                },
                {
                    type: 'null'
                }
            ],
            title: 'Description',
            description: 'Description'
        },
        isPublic: {
            type: 'boolean',
            title: 'Is Public',
            description: 'Whether the project is public'
        },
        startDate: {
            type: 'string',
            format: 'date',
            title: 'Start Date',
            ddescription: 'Experiment start date'
        },
        endDate: {
            type: 'string',
            format: 'date',
            title: 'End Date',
            description: 'Experiment end date'
        },
        excludedDates: {
            items: {
                type: 'string',
                format: 'date'
            },
            type: 'array',
            title: 'Excluded Dates',
            description: 'Experimental exclusion days'
        },
        experimentTimeslots: {
            items: {
                '$ref': '#/components/schemas/ExperimentTimeslotRequest'
            },
            type: 'array',
            title: 'Experiment Timeslots',
            description: 'Time information of experiment'
        },
        maxParticipants: {
            type: 'integer',
            title: 'Max Participants',
            description: 'Maximum number of experiment participants'
        },
        experimentType: {
            '$ref': '#/components/schemas/ExperimentTypeEnum'
        },
        location: {
            type: 'string',
            title: 'Location',
            description: 'Experiment location'
        }
    },
    type: 'object',
    required: ['title', 'isPublic', 'startDate', 'endDate', 'excludedDates', 'experimentTimeslots', 'maxParticipants', 'experimentType', 'location'],
    title: 'PutProjectRequest'
} as const;

export const $RefreshTokenRequest = {
    properties: {
        token: {
            type: 'string',
            title: 'Token',
            description: 'Token'
        },
        refreshToken: {
            type: 'string',
            title: 'Refresh Token',
            description: 'Refresh token'
        }
    },
    type: 'object',
    required: ['token', 'refreshToken'],
    title: 'RefreshTokenRequest'
} as const;

export const $RefreshTokenResponse = {
    properties: {
        token: {
            type: 'string',
            title: 'Token',
            description: 'Token'
        },
        refreshToken: {
            type: 'string',
            title: 'Refresh Token',
            description: 'Refresh token'
        }
    },
    type: 'object',
    required: ['token', 'refreshToken'],
    title: 'RefreshTokenResponse'
} as const;

export const $ResetPasswordRequest = {
    properties: {
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
            description: 'Email'
        },
        password: {
            type: 'string',
            format: 'password',
            title: 'Password',
            description: 'Password',
            writeOnly: true
        }
    },
    type: 'object',
    required: ['email', 'password'],
    title: 'ResetPasswordRequest'
} as const;

export const $UpdateUserRequest = {
    properties: {
        username: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Username',
            description: 'User username'
        },
        phoneNum: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Phone Num',
            description: 'Phone Number'
        }
    },
    type: 'object',
    title: 'UpdateUserRequest'
} as const;

export const $UpdateWorkspaceRequest = {
    properties: {
        title: {
            anyOf: [
                {
                    type: 'string'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Title',
            description: 'Title'
        },
        orderNo: {
            anyOf: [
                {
                    type: 'integer'
                },
                {
                    type: 'null'
                }
            ],
            title: 'Order No',
            description: 'New order no'
        }
    },
    type: 'object',
    title: 'UpdateWorkspaceRequest'
} as const;

export const $UserOauthResponse = {
    properties: {
        id: {
            type: 'integer',
            title: 'Id',
            description: 'ID'
        },
        oauthId: {
            type: 'string',
            title: 'Oauth Id',
            description: 'Oauth ID'
        },
        provider: {
            type: 'string',
            title: 'Provider',
            description: 'Provider'
        }
    },
    type: 'object',
    required: ['id', 'oauthId', 'provider'],
    title: 'UserOauthResponse'
} as const;

export const $ValidateEmailResponse = {
    properties: {
        availability: {
            type: 'boolean',
            title: 'Availability',
            description: 'Email Availability'
        }
    },
    type: 'object',
    required: ['availability'],
    title: 'ValidateEmailResponse'
} as const;

export const $ValidationError = {
    properties: {
        loc: {
            items: {
                anyOf: [
                    {
                        type: 'string'
                    },
                    {
                        type: 'integer'
                    }
                ]
            },
            type: 'array',
            title: 'Location'
        },
        msg: {
            type: 'string',
            title: 'Message'
        },
        type: {
            type: 'string',
            title: 'Error Type'
        }
    },
    type: 'object',
    required: ['loc', 'msg', 'type'],
    title: 'ValidationError'
} as const;

export const $VerifyEmailRequest = {
    properties: {
        email: {
            type: 'string',
            format: 'email',
            title: 'Email',
            description: 'Email'
        },
        code: {
            type: 'string',
            title: 'Code',
            description: 'Code'
        }
    },
    type: 'object',
    required: ['email', 'code'],
    title: 'VerifyEmailRequest'
} as const;