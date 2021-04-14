//Import all actions that will be used by the app
import UserDataActions from "./UserData/userDataActions"
import UserManagementActions from "./UserManagement/userManagementActions"

//spred the actions
export default {
     ...UserDataActions,
     ...UserManagementActions
}