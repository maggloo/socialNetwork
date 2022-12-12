export const requiredField = (value: any) => {
    return value ? undefined : "field is required";
};

export const maxLengthCreator = (maxLength: number) => (value: { length: number }) => {
    return value.length > maxLength ? `Max length should be ${maxLength} characters` : undefined ;
}

