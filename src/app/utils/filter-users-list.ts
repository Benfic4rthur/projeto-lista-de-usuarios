import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const name_not_typed = name === undefined;
    if (name_not_typed) {
        return usersList;
    }
    const filteredeList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    return filteredeList;
}

const filterUsersListByStatus = (status: boolean | undefined, filteredList: IUser[]): IUser[] => {
    const status_not_typed = status === undefined;
    if (status_not_typed) {
        return filteredList;
    }
    const filteredeList = filteredList.filter((user) => user.ativo === status);
    return filteredeList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const dates_not_typed = startDate === undefined || endDate === undefined;
    if (dates_not_typed) {
        return usersList;
    }
    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), { start: startDate, end: endDate }));

    return listFiltered;
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}
export { filterUsersList }