export type MetaData = {
    createdBy: UserMetadata;
    createdOn: string;
    modifiedBy: UserMetadata;
    modifiedOn: string;
};

type UserMetadata = {
    id: string;
    name: string;
    email: string;
    picture: string;
};