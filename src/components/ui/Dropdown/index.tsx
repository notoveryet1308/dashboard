import { Dropdown as AntdDropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const Dropdown = ({ menu, label }: { menu: MenuProps; label: string }) => {
  return (
    <AntdDropdown menu={menu}>
      <Button>
        <Space>
          {label}
          <DownOutlined />
        </Space>
      </Button>
    </AntdDropdown>
  );
};

export default Dropdown;
