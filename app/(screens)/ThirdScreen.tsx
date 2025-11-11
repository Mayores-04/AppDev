import { Box } from "@/components/ui/box";
import {
  Table,
  TableBody,
  TableCaption,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThirdScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>ThirdScreen</Text>
      <Box className="rounded-lg overflow-hidden w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email Address</TableHead>
              <TableHead>Phone Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableData>Rajesh Kumar</TableData>
              <TableData className="font-normal">rajesh@example.com</TableData>
              <TableData className="font-normal">1234567890</TableData>
            </TableRow>
            <TableRow>
              <TableData>Priya Sharma</TableData>
              <TableData className="font-normal">priya@example.com</TableData>
              <TableData className="font-normal">1234567890</TableData>
            </TableRow>
            <TableRow>
              <TableData>Ravi Patel</TableData>
              <TableData className="font-normal">ravi@example.com</TableData>
              <TableData className="font-normal">1234567890</TableData>
            </TableRow>
            <TableRow>
              <TableData>Ananya Gupta</TableData>
              <TableData className="font-normal">ananya@example.com</TableData>
              <TableData className="font-normal">1234567890</TableData>
            </TableRow>
            <TableRow>
              <TableData>Arjun Singh</TableData>
              <TableData className="font-normal">arjun@example.com</TableData>
              <TableData className="font-normal">1234567890</TableData>
            </TableRow>
            <TableRow>
              <TableData>Nisha Verma</TableData>
              <TableData className="font-normal">nisha@example.com</TableData>
              <TableData className="font-normal">1234567890</TableData>
            </TableRow>
          </TableBody>
          <TableCaption className="font-normal">
            Showing recent membership details
          </TableCaption>
        </Table>
      </Box>
    </SafeAreaView>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({});
