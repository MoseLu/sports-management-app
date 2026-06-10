import { Button, Card, Col, Row, Space, Statistic } from 'antd';
import { useTranslation } from 'react-i18next';

import ExampleComponent from '@/components/ExampleComponent';
import { useCounterStore } from '@/stores/counter-store';
import type { Todo } from '@/types/models';

const sampleTodos: Todo[] = [
  { id: 1, content: 'ct1' },
  { id: 2, content: 'ct2' },
  { id: 3, content: 'ct3' },
  { id: 4, content: 'ct4' },
  { id: 5, content: 'ct5' },
];

const sampleMeta = { totalCount: 1200 };

export default function IndexPage() {
  const { t } = useTranslation();
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <Card title={t('appName')}>
          <Statistic title={t('counter')} value={count} />
          <Space style={{ marginTop: 16 }}>
            <Button type="primary" onClick={increment}>
              {t('increment')}
            </Button>
            <Button onClick={decrement}>{t('decrement')}</Button>
            <Button onClick={reset}>{t('reset')}</Button>
          </Space>
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <ExampleComponent
          title={t('exampleComponent')}
          active
          todos={sampleTodos}
          meta={sampleMeta}
        />
      </Col>
    </Row>
  );
}
