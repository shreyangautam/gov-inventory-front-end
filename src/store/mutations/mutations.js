//import all mutations that will be used
import UserDataMutations from "./UserData/userDataMutations"
import UserManagementMutations from "./UserManagement/UserManagementMutations"
//Spread the mutations below
export default{
       ...UserDataMutations,
       ...UserManagementMutations
}