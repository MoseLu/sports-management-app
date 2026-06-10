import { useMemo, useState } from 'react';
import { Card, List, Tag, Typography } from 'antd';

import type { Meta, Todo } from '@/types/models';

const { Title, Text } = Typography;

export interface ExampleComponentProps {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}

export default function ExampleComponent({
  title,
  todos = [],
  meta,
  active,
}: ExampleComponentProps) {
  const [clickCount, setClickCount] = useState(0);
  const todoCount = useMemo(() => todos.length, [todos]);

  return (
    <Card size="small">
      <Title level={4} style={{ marginTop: 0 }}>
        {title}
      </Title>
      <List
        size="small"
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            onClick={() => setClickCount((n) => n + 1)}
            style={{ cursor: 'pointer' }}
          >
            <Text>
              {todo.id} - {todo.content}
            </Text>
          </List.Item>
        )}
      />
      <Text>
        Count: {todoCount} / {meta.totalCount}
      </Text>
      <br />
      <Text>
        Active: <Tag color={active ? 'green' : 'default'}>{active ? 'yes' : 'no'}</Tag>
      </Text>
      <br />
      <Text>Clicks on todos: {clickCount}</Text>
    </Card>
  );
}
