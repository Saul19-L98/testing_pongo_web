export interface IUserCredencials {
  id: number;
  primer_nombre: string;
  segundo_nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  user_name: string;
  email: string;
  role: IRole[];
  permissions: IPermission[];
  menu: IMenu[];
  token: string;
}

export interface IRole {
  id_role: number;
  role_name: string;
}

export interface IPermission {
  id: number;
  permission: string;
  type: string;
  component_content: string;
}

export interface IMenu {
  menu: string;
  id_html: string;
  icon: string;
  main_url: any;
  menu_options: IMenuOption[];
}

export interface IMenuOption {
  option_name: string;
  option_path: string;
}
