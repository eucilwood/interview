import React, { useEffect, useState } from "react";
import { Card, Segmented, Form, Select, Button, Col, Row } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import "./style.css";
const CustomFoRM = () => {
  const [leftSelectValue, setLeftSelectValue] = useState("@alipay/wealth-doui");
  const [rightSelectValue, setrightSelectValue] =
    useState("0.0.0-S12121212121");
  const [tab, setTab] = useState("类型1");
  const optionsLeft = [
    { value: "@alipay/wealth-doui", label: "@alipay/wealth-doui" },
    { value: "@alipay/wealth-Aplan", label: "@alipay/wealth-Aplan" },
    { value: "@alipay/wealth-Bplan", label: "@alipay/wealth-Bplan" },
    { value: "@alipay/wealth-Cplan", label: "@alipay/wealth-Cplan" },
  ];
  const optionsRight = [
    { value: "1", label: "0.0.0-S12121212121" },
    { value: "2", label: "0.0.0-S13333332121" },
    { value: "3", label: "0.0.0-S12666666121" },
    { value: "4", label: "0.0.0-S12777712121" },
  ];

  const changeLeftSelect = (e) => {
    console.log(e);
  };
  const changeRightSelect = (e) => {
    console.log(e);
  };
  const changeSegmented = (e) => {
    console.log(e);
    setTab(e);
  };
  return (
    <div className="main">
      <Card>
        <Form labelWrap={false} labelAlign="left" layout="vertical">
          <Form.Item
            label={
              <>
                <span className="weight">模板类型：</span>
              </>
            }
            name="modelType"
            rules={[{ required: true, message: "请选择类型" }]}
          >
            <Segmented
              options={["类型1", "类型2"]}
              onChange={changeSegmented}
              value={tab}
            />
          </Form.Item>
          {tab === "类型1" ? (
            <Form.Item
              label={
                <>
                  <span className="weight">模板：</span>
                  <span className="gray">未搜索不到，</span>
                  <span className="blue">手动打标&gt;</span>
                </>
              }
              name="modelType"
              rules={[{ required: true, message: "请选择类型" }]}
            >
              <Row gutter={16}>
                <Col span={16}>
                  <Row>
                    <Col span={12}>
                      <Select
                        onChange={changeLeftSelect}
                        value={leftSelectValue}
                      >
                        {optionsLeft.map((item) => {
                          return (
                            <Select.Option
                              value={item.value}
                              label={item.label}
                              key={item.value}
                            ></Select.Option>
                          );
                        })}
                      </Select>
                    </Col>
                    <Col span={12}>
                      <Select
                        onChange={changeRightSelect}
                        value={rightSelectValue}
                      >
                        {optionsLeft.map((item) => {
                          return (
                            <Select.Option
                              value={item.value}
                              label={item.label}
                              key={item.value}
                            ></Select.Option>
                          );
                        })}
                      </Select>
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Button type="primary" icon={<UnorderedListOutlined />}>
                    升级
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          ) : (
            <div className="cardbox">
              <Card>响应式根据页面宽度适配卡片个数</Card>
              <Card>测试1</Card>
              <Card>测试2</Card>
              <Card>测试3</Card>
              <Card>测试4</Card>
              <Card>测试5</Card>
              <Card>测试6</Card>
              <Card>测试7</Card>
              <Card>测试8</Card>
              <Card>测试9</Card>
              <Card>测试10</Card>
            </div>
          )}
        </Form>
      </Card>
    </div>
  );
};
export default CustomFoRM;
