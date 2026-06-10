import { Layout, Menu, Select, Space, Typography } from 'antd';
import {
  BookOutlined,
  CommentOutlined,
  FacebookOutlined,
  GithubOutlined,
  MessageOutlined,
  StarOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import i18n from '@/i18n';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// External links styled like the legacy EssentialLink list, but with
// generic labels and Ant Design icons (not the original Quasar icon
// set, which targeted quasar.dev sites). All links open in a new tab.
type ExternalLink = {
  key: string;
  title: string;
  caption: string;
  link: string;
  icon: ReactNode;
};

const externalLinks: ExternalLink[] = [
  {
    key: 'docs',
    title: 'Documentation',
    caption: 'Project documentation',
    link: 'https://github.com/1208136885',
    icon: <BookOutlined />,
  },
  {
    key: 'source',
    title: 'Source',
    caption: 'Repository on GitHub',
    link: 'https://github.com/1208136885',
    icon: <GithubOutlined />,
  },
  {
    key: 'chat',
    title: 'Community chat',
    caption: 'Realtime discussion',
    link: 'https://github.com/1208136885',
    icon: <MessageOutlined />,
  },
  {
    key: 'forum',
    title: 'Forum',
    caption: 'Long-form discussion',
    link: 'https://github.com/1208136885',
    icon: <CommentOutlined />,
  },
  {
    key: 'twitter',
    title: 'Twitter',
    caption: 'Latest updates',
    link: 'https://twitter.com/',
    icon: <TwitterOutlined />,
  },
  {
    key: 'facebook',
    title: 'Facebook',
    caption: 'Community page',
    link: 'https://facebook.com/',
    icon: <FacebookOutlined />,
  },
  {
    key: 'bookmarks',
    title: 'Bookmarks',
    caption: 'Saved resources',
    link: 'https://github.com/1208136885',
    icon: <StarOutlined />,
  },
];

export default function MainLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedKey = useMemo(() => {
    if (location.pathname === '/') return 'home';
    return 'home';
  }, [location.pathname]);

  const menuItems: MenuProps['items'] = [
    { key: 'home', label: t('appName'), onClick: () => navigate('/') },
    ...externalLinks.map((link) => ({
      key: link.key,
      icon: link.icon,
      label: (
        <a href={link.link} target="_blank" rel="noopener noreferrer">
          {link.title} <Text type="secondary">— {link.caption}</Text>
        </a>
      ),
    })),
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: '#001529',
        }}
      >
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          {t('appName')}
        </Title>
        <Space>
          <Text style={{ color: '#fff' }}>Language</Text>
          <Select
            size="small"
            value={i18n.language}
            style={{ width: 120 }}
            onChange={(value) => i18n.changeLanguage(value)}
            options={[
              { value: 'en-US', label: 'English' },
            ]}
          />
        </Space>
      </Header>
      <Layout>
        <Sider width={240} theme="light">
          <Menu mode="inline" selectedKeys={[selectedKey]} items={menuItems} />
        </Sider>
        <Content style={{ padding: 24, background: '#f5f5f5' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
