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
  Tag,
  Button,
} from "antd";
import {
  StarFilled,
  EnvironmentOutlined,
  CheckCircleOutlined,
  UserOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import LeafletMap from "@/components/LeafletMap";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export default function HotelDetailPage() {
  const router = useRouter();
  const { selectedHotel } = useHotel();

  if (!selectedHotel) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        separator=">"
        items={[
          { title: "Home", href: "/" },
          {
            title: "Hotels",
            onClick: () => router.back(),
            className: "cursor-pointer text-blue-500 hover:underline",
          },
          { title: selectedHotel.name },
        ]}
      />

      {/* Hotel Title & Location */}
      <div className="mt-4">
        <Title level={2}>{selectedHotel.name}</Title>
        <Space>
          {Array.from({ length: selectedHotel.star }, (_, index) => (
            <StarFilled key={index} style={{ color: "darkgoldenrod" }} />
          ))}
        </Space>
        <Text className="block mt-2">
          <EnvironmentOutlined /> {selectedHotel.address}
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
      <Tabs
        defaultActiveKey="1"
        className="mt-16"
        items={[
          {
            label: "Tentang Hotel",
            key: "1",
            children: <Text>{selectedHotel.description}</Text>,
          },
          {
            label: "Fasilitas",
            key: "2",
            children: (
              <Row gutter={[16, 16]}>
                {selectedHotel.facilities.map((facility, index) => (
                  <Col key={index} span={8}>
                    <Card>
                      <CheckCircleOutlined className="text-green-500" />{" "}
                      {facility}
                    </Card>
                  </Col>
                ))}
              </Row>
            ),
          },
          {
            label: "Kamar",
            key: "3",
            children: (
              <div>
                {selectedHotel.rooms.map((room) => (
                  <Card
                    key={room.id}
                    style={{ marginBottom: "16px", borderRadius: "8px" }}
                  >
                    <Row gutter={[16, 16]}>
                      {/* Room Image */}
                      <Col xs={24} md={6}>
                        <Carousel autoplay>
                          {room.images.map((image, index) => (
                            <div key={index}>
                              <img
                                src={image}
                                alt={`Room ${index}`}
                                className="w-full h-[120px] rounded-lg object-cover"
                              />
                            </div>
                          ))}
                        </Carousel>
                        <Text strong>{room.name}</Text>
                        <Text type="secondary" className="ml-8">
                          {room.size} m²
                        </Text>
                      </Col>

                      {/* Room Details */}
                      <Col xs={24} md={12}>
                        <Space direction="vertical" style={{ width: "100%" }}>
                          <Text strong>Kamar, {room.guest_capacity} Tamu</Text>
                          <Space>
                            <Tag color="blue">Bisa refund</Tag>
                            <Tag color="cyan">Bisa reschedule</Tag>
                          </Space>

                          {/* Guest Capacity & Bed Type */}
                          <Space>
                            <UserOutlined />
                            <Text>{room.guest_capacity} Tamu</Text>
                            <Text>{room.bed_type}</Text>
                          </Space>

                          {/* Breakfast & Wi-Fi */}
                          <Space>
                            {room.is_breakfast_included ? (
                              <CheckOutlined style={{ color: "green" }} />
                            ) : (
                              <CloseOutlined style={{ color: "red" }} />
                            )}
                            <Text>
                              {room.is_breakfast_included
                                ? "Termasuk sarapan"
                                : "Tidak termasuk sarapan"}
                            </Text>

                            <CheckOutlined style={{ color: "green" }} />
                            <Text>Wi-Fi gratis</Text>
                          </Space>
                        </Space>
                      </Col>

                      {/* Price & Select Button */}
                      <Col xs={24} md={6} style={{ textAlign: "right" }}>
                        <Title
                          level={4}
                          style={{ color: "#1890ff", margin: 0 }}
                        >
                          IDR {room.price}
                        </Title>
                        <Button type="primary" size="large">
                          Pilih Kamar
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            ),
          },
          {
            label: "Review",
            key: "4",
            children: <Text>Belum ada review</Text>,
          },
          {
            label: "Lokasi",
            key: "5",
            children: (
              <div className="flex gap-4">
                {/* Left: Map */}
                <div className="w-1/2">
                  <LeafletMap
                    latitude={selectedHotel.latitude}
                    longitude={selectedHotel.longitude}
                  />
                </div>

                {/* Right: Address & Directions */}
                <div className="w-1/2">
                  <p>{selectedHotel.address}</p>
                  <a
                    href={`https://www.google.com/maps?q=${selectedHotel.latitude},${selectedHotel.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat peta
                  </a>
                </div>
              </div>
            ),
          },
          {
            label: "Kebijakan Hotel",
            key: "6",
            children: <Text>{selectedHotel.policy}</Text>,
          },
        ]}
      />
    </div>
  );
}
