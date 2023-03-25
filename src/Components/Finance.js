import { Box, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const Finance = () => {
  return (
    <Box p="5" textAlign={"justify"}>
      <Heading textAlign={"center"} mx='5' mb="5">
        Financial Report of 2021-2022
      </Heading>
      <Heading mt="5" size="md">
        Revenues:
      </Heading>
      <List m="1" mx="5" color={"green.500"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Room revenue: $100,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Food and beverage revenue: $50,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Other revenue: $20,000
        </ListItem>
      </List>
      <Heading mt="5" size="md">
        Expenses:
      </Heading>
      <List m="1" mx="5" color={"red.500"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Payroll and benefits: $80,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Operating expenses: $30,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Marketing and advertising expenses: $10,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Property taxes and insurance: $5,000
        </ListItem>
      </List>
      <Heading mt="5" size="md">
        Profit and Loss:
      </Heading>
      <List m="1" mx="5" color={"blue.400"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Gross revenue: $170,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Gross expenses: $125,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Net income: $45,000
        </ListItem>
      </List>
      <Heading mt="5" size="md">
        Accounts Receivable:
      </Heading>
      <List m="1" mx="5" color={"green.500"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Outstanding invoices from guests: $8,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Outstanding invoices from corporate clients: $5,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Late payment penalties and interest charges: $1,000
        </ListItem>
      </List>
      <Heading mt="5" size="md">
        Accounts Payable:
      </Heading>
      <List m="1" mx="5" color={"red.500"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Outstanding bills to suppliers and vendors: $7,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Interest charges and late payment penalties: $500
        </ListItem>
      </List>
      <Heading mt="5" size="md">
        Cash Flow:
      </Heading>
      <List m="1" mx="5" color={"teal.500"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Cash inflows from room and food/beverage sales: $150,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Cash inflows from room and food/beverage sales: $150,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Cash outflows for expenses such as payroll and supplies: $110,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Net cash flow for the month or year: $40,000
        </ListItem>
      </List>
      <Heading mt="5" size="md">
        Budgeting:
      </Heading>
      <List m="1" mx="5" color={"cyan.500"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Annual revenue and expense projections: $1,200,000 in revenue,
          $900,000 in expenses
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Budgeted versus actual revenue and expenses:
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Revenue: Budgeted $100,000, Actual $105,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Expenses: Budgeted $80,000, Actual $78,000
        </ListItem>
      </List>
      <b>
        **Variance analysis to identify areas where actual results differ from
        budgeted amounts: Revenue exceeded budget by 5%, while expenses were
        under budget by 2.5%.**
      </b>
      <Heading mt="5" size="md">
        Financial Statements:
      </Heading>
      <List m="1" mx="5" color={"red.500"} fontWeight="medium">
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Balance sheet: Assets = $500,000, Liabilities = $200,000, Equity =
          $300,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Income statement: Revenue = $170,000, Expenses = $125,000, Net Income
          = $45,000
        </ListItem>
        <ListItem>
          <ListIcon as={AiFillCaretRight} />
          Cash flow statement: Cash inflows = $150,000, Cash outflows =
          $110,000, Net cash flow = $40,000
        </ListItem>
      </List>
    </Box>
  );
};

export default Finance;
