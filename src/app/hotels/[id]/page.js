"use client";

import { useHotel } from "@/context/hotelContext";
import {
  Breadcrumb,
  Carousel,
  Row,
  Col,
  Typography,
  Tabs,
  Card,
  Space,
} from "antd";
import {
  StarFilled,
  EnvironmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function HotelDetailPage() {
  const { selectedHotel } = useHotel();

  if (!selectedHotel) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        separator=">"
        items={[
          { title: "Home", href: "/" },
          { title: "Hotels", href: "/hotels" },
          { title: selectedHotel.name },
        ]}
      />

      {/* Hotel Title & Location */}
      <div className="mt-4">
        <Title level={2}>{selectedHotel.name}</Title>
        <Space>
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
          <StarFilled className="text-yellow-500" />
        </Space>
        <Text className="block mt-2">
          <EnvironmentOutlined /> {selectedHotel.location}
        </Text>
      </div>

      {/* Hotel Image Carousel & Thumbnail */}
      <Row gutter={16} className="mt-4">
        <Col span={14}>
          <Carousel autoplay>
            {selectedHotel.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Hotel ${index}`}
                  className="w-full h-72 rounded-lg object-cover"
                />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={10}>
          <Row gutter={[8, 8]}>
            {selectedHotel.images.slice(0, 4).map((image, index) => (
              <Col span={12} key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-32 rounded-lg object-cover"
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Hotel Details - Tabs */}
      <Tabs defaultActiveKey="1" className="mt-6">
        <Tabs.TabPane tab="Tentang Hotel" key="1">
          <Text>{selectedHotel.description}</Text>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Fasilitas" key="2">
          <Row gutter={[16, 16]}>
            {selectedHotel.facilities.map((facility, index) => (
              <Col key={index} span={8}>
                <Card>
                  <CheckCircleOutlined className="text-green-500" /> {facility}
                </Card>
              </Col>
            ))}
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Kamar" key="3">
          <Text>List card kamar</Text>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Review" key="4">
          <Text>Belum ada review</Text>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
