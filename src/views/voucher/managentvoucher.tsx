import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Nhập SweetAlert2

import {
    Box,
    Button,
    Card,
    FormControl,
    FormLabel,
    Grid,
    Input,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    InputGroup,
    InputRightElement,
    useColorModeValue,

    IconButton,
    Select as ChakraSelect,
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

interface Voucher {
    Code: string;
    DiscountAmount: number;
    ExpiryDate: string;
    MinimumPurchaseAmount: number;
    quantityused: number;
    usableQuantity: number;
    status: string;
    percent: number;
}

export default function VoucherManagement() {
    const tableBg = useColorModeValue("white", "gray.800");

    const { isOpen, onOpen, onClose } = useDisclosure(); // Modal hooks
    const [showdata, setShowdata] = useState<Voucher[]>([]);
    const [filteredVouchers, setFilteredVouchers] = useState<Voucher[]>([]);
    const [newVoucher, setNewVoucher] = useState<Voucher>({
        Code: '',
        DiscountAmount: 0,
        ExpiryDate: '',
        MinimumPurchaseAmount: 0,
        quantityused: 0,
        usableQuantity: 0,
        status: '',
        percent: 0,
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/vouchers');
            const data: Voucher[] = await response.json();
            setShowdata(data);
            setFilteredVouchers(data); // Set initial filtered vouchers to show all
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Chỉ chạy 1 lần khi component được mount

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filterVouchers = () => {
        const filtered = showdata.filter((voucher) =>
            voucher.Code.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredVouchers(filtered);
        setCurrentPage(1); // Reset to first page when searching
    };

    const totalPages = Math.ceil(filteredVouchers.length / itemsPerPage);
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const currentVouchers = filteredVouchers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewVoucher((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddVoucher = async () => {
        const newVoucherData: Voucher = {
            ...newVoucher,
            DiscountAmount: parseFloat(newVoucher.DiscountAmount.toString()),
            MinimumPurchaseAmount: parseFloat(newVoucher.MinimumPurchaseAmount.toString()),
            quantityused: parseInt(newVoucher.quantityused.toString(), 10),
            usableQuantity: parseInt(newVoucher.usableQuantity.toString(), 10),
            percent: parseFloat(newVoucher.percent.toString()),
        };

        try {
            const response = await fetch('http://localhost:3000/api/vouchers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVoucherData),
            });

            if (response.ok) {
                // If successfully added, update the vouchers state
                setShowdata((prevVouchers) => [...prevVouchers, newVoucherData]);
                setNewVoucher({
                    Code: '',
                    DiscountAmount: 0,
                    ExpiryDate: '',
                    MinimumPurchaseAmount: 0,
                    quantityused: 0,
                    usableQuantity: 0,
                    status: '',
                    percent: 0,
                });
                Swal.fire({
                    title: 'Thêm Thành Công',
                    text: 'Thêm Thành Công.',
                    icon: 'success',
                    confirmButtonText: 'Đóng',
                });
                filterVouchers(); // Reapply the filter to include the new voucher
                onClose(); // Close the modal
            } else {
                Swal.fire({
                    title: 'Thêm Thất Bại',
                    text: 'Thêm thất bại! Vui lòng thử lại.',
                    icon: 'error',
                    confirmButtonText: 'Đóng',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Thêm Thất Bại',
                text: 'Thêm thất bại! Vui lòng thử lại.',
                icon: 'error',
                confirmButtonText: 'Đóng',
            });
            console.error('Error adding voucher:', error);
        }
    };


    return (
        <Box pt={{ base: "20px", md: "80px", xl: "80px" }}>
            <Card p={5} mb={{ base: "0px", lg: "40px" }}>
                <div className="card-header">
                    <Text fontSize="xl" fontWeight="bold">DANH SÁCH VOUCHER</Text>
                    <Button
                        onClick={onOpen} // Open modal on click
                        colorScheme="blue"
                        size="sm"
                    >
                        <i className="ri-add-line fw-semibold align-middle"></i> Thêm voucher mới
                    </Button>
                </div>

                {/* Thanh tìm kiếm */}
                <Grid templateColumns="1fr 3fr" gap={4} mt={4}>
                    <FormControl>
                        <FormLabel>Tìm kiếm theo mã voucher</FormLabel>
                        <InputGroup>
                            <Input
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Nhập mã voucher"
                            />
                            <InputRightElement>
                                <IconButton
                                    aria-label="Search voucher"
                                    icon={<SearchIcon />}
                                    onClick={filterVouchers}
                                />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </Grid>

                {/* Modal for adding new voucher */}
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Thêm Voucher Mới</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Single Column Layout for Form Fields */}
                            <Grid templateColumns="1fr" gap={6}>
                                <FormControl>
                                    <FormLabel>Mã Voucher</FormLabel>
                                    <Input
                                        name="Code"
                                        value={newVoucher.Code}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Nhập mã voucher"
                                    />

                                </FormControl>
                                <FormControl>
                                    <FormLabel>Số tiền giảm giá</FormLabel>
                                    <Input
                                        name="DiscountAmount"
                                        value={newVoucher.DiscountAmount}
                                        onChange={handleInputChange}
                                        type="number"
                                        placeholder="Nhập số tiền giảm giá"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Ngày hết hạn</FormLabel>
                                    <Input
                                        name="ExpiryDate"
                                        value={newVoucher.ExpiryDate}
                                        onChange={handleInputChange}
                                        type="date"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Số tiền mua tối thiểu</FormLabel>
                                    <Input
                                        name="MinimumPurchaseAmount"
                                        value={newVoucher.MinimumPurchaseAmount}
                                        onChange={handleInputChange}
                                        type="number"
                                        placeholder="Nhập số tiền mua tối thiểu"
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Phần trăm Giảm Giá</FormLabel>
                                    <Input
                                        name="percent"
                                        value={newVoucher.percent}
                                        onChange={handleInputChange}
                                        type="number"
                                        placeholder="Nhập phần trăm giảm giá"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Số lượng đã sử dụng</FormLabel>
                                    <Input
                                        name="quantityused"
                                        value={newVoucher.quantityused}
                                        onChange={handleInputChange}
                                        type="number"
                                        placeholder="Nhập số lượng đã sử dụng"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Số lượng có thể dùng</FormLabel>
                                    <Input
                                        name="usableQuantity"
                                        value={newVoucher.usableQuantity}
                                        onChange={handleInputChange}
                                        type="number"
                                        placeholder="Nhập số lượng có thể dùng"
                                    />
                                </FormControl>
                            </Grid>

                            {/* Trạng thái voucher */}
                            <Grid templateColumns="1fr" gap={6} mt={4}>
                                <FormControl>
                                    <FormLabel>Trạng thái</FormLabel>
                                    <ChakraSelect
                                        name="status"
                                        value={newVoucher.status}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Chọn trạng thái</option>
                                        <option value="active">Kích hoạt</option>
                                        <option value="inactive">Ngừng hoạt động</option>
                                    </ChakraSelect>
                                </FormControl>
                            </Grid>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" onClick={handleAddVoucher}>
                                Thêm Voucher
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Hủy
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                {/* Bảng danh sách voucher */}
                <Table variant="simple" mt={6}>
                    <Thead>
                        <Tr>
                            <Th color={tableBg}>Mã Voucher</Th>
                            <Th  color={tableBg}>Số tiền giảm giá</Th>
                            <Th  color={tableBg}>Ngày hết hạn</Th>
                            <Th  color={tableBg}>Số tiền mua tối thiểu</Th>
                            <Th  color={tableBg}>Số lượng đã sử dụng</Th>
                            <Th  color={tableBg}>Số lượng có thể dùng</Th>
                            <Th  color={tableBg}>Trạng thái</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {showdata.map((voucher) => (
                            <Tr >
                                <Td>{voucher.Code}</Td>
                                <Td>{voucher.DiscountAmount} VNĐ</Td>
                                <Td>{voucher.ExpiryDate}</Td>
                                <Td>{voucher.MinimumPurchaseAmount	} VNĐ</Td>
                                <Td>{voucher.quantityused}</Td>
                                <Td>{voucher.usableQuantity}</Td>
                                <Td>{voucher.status === 'active' ? 'Kích hoạt' : 'Ngừng hoạt động'}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                {/* Phân trang */}
                <Box mt={4} display="flex" justifyContent="center">
                    <Button
                        onClick={() => paginate(currentPage - 1)}
                        isDisabled={currentPage === 1}
                    >
                        Trước
                    </Button>
                    <Text mx={2}>
                        Trang {currentPage} của {totalPages}
                    </Text>
                    <Button
                        onClick={() => paginate(currentPage + 1)}
                        isDisabled={currentPage === totalPages}
                    >
                        Sau
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}

                       
