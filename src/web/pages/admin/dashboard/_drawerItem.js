import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  Info,
  School,
  DirectionsBikeOutlined,
  AccountTree,
  Contacts,
  Settings,
  AccountCircle,
  Logout,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { utilAction } from "../../../../lib/store/util";
import { auth } from "../../../../lib/utils/firebase";
import { signOut } from "firebase/auth";
import { useToasts } from "react-toast-notifications";

/**
 *
 */
export const drawerList = [
  {
    key: 0,
    text: "Education",
    icon: <Info />,
  },
  {
    key: 1,
    text: "About me",
    icon: <School />,
  },
  {
    key: 2,
    text: "Experience",
    icon: <DirectionsBikeOutlined />,
  },
  {
    key: 3,
    text: "Project",
    icon: <AccountTree />,
  },
  {
    key: 4,
    text: "Contact",
    icon: <Contacts />,
  },
  {
    key: 5,
    text: "General setting",
    icon: <Settings />,
  },
  {
    key: 6,
    text: "Account setting",
    icon: <AccountCircle />,
  },
  {
    key: 7,
    text: "Logout",
    icon: <Logout />,
  },
];

/**
 *
 * @returns
 */
const BoxDrawer = () => {
  const toast = useToasts();
  const dispatch = useDispatch();
  /**
   *
   * @param {*} value
   * @returns
   */
  const handleClick = (value) => (e) => {
    const key = "drawer";
    if (value + 1 === drawerList.length) {
      signOut(auth)
        .then((res) => {
          toast.addToast("Logged-out successfully", {
            appearance: "info",
          });
        })
        .catch((err) => {
          toast.addToast("Some error occured", {
            appearance: "error",
          });
        });
    } else {
      dispatch(utilAction.setKeyValue({ key, value }));
    }
  };
  return (
    <Box>
      <Toolbar>
        <Typography color="primary" variant="h6">
          Admin @ Portfolio
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {drawerList.map((e, i) => (
          <ListItem key={e.key} onClick={handleClick(i)} button>
            <ListItemIcon>{e.icon}</ListItemIcon>
            <ListItemText>{e.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BoxDrawer;
