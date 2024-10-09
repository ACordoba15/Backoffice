import { RecordTS } from "../types/Record";

export const recordsMock: RecordTS[] = [
    {
        id: 1,
        username: 'johndoe',
        action: 'Login',
        createdAt: '2024-10-01T10:00:00Z',
        updatedAt: '2024-10-01T10:05:00Z',
    },
    {
        id: 2,
        username: 'janedoe',
        action: 'Logout',
        createdAt: '2024-09-25T08:30:00Z',
        updatedAt: '2024-09-25T08:45:00Z',
    },
    {
        id: 3,
        username: 'alice',
        action: 'Password Change',
        createdAt: '2024-09-20T11:45:00Z',
        updatedAt: '2024-09-20T12:00:00Z',
    },
    {
        id: 4,
        username: 'bob',
        action: 'Profile Update',
        createdAt: '2024-09-18T13:15:00Z',
        updatedAt: '2024-09-18T13:20:00Z',
    },
    {
        id: 5,
        username: 'charlie',
        action: 'Account Deactivation',
        createdAt: '2024-08-30T09:00:00Z',
        updatedAt: '2024-08-30T09:10:00Z',
    },
];

