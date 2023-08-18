import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  gap: 10px;
  padding: 10px 20px;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  background: #ffffff;
  border-radius: 8px;
  padding: 10px;
`;
/**
 *   {/* <form
        method="post"
        action="https://secure.wayforpay.com/pay"
        accept-charset="utf-8"
      >
        <input name="merchantAccount" value={data.merchantAccount} />

        <input name="merchantAuthType" value={data.merchantAuthType} />

        <input name="merchantDomainName" value={data.merchantDomainName} />

        <input name="orderReference" value={data.orderReference} />

        <input name="orderDate" value={data.orderDate} />

        <input name="amount" value={data.amount} />

        <input name="currency" value={data.currency} />

        <input name="orderTimeout" value={data.orderTimeout} />

        {data.productName.map((name, index) => (
          <input key={index} name="productName[]" value={name} />
        ))}

        {data.productPrice.map((price, index) => (
          <input key={index} name="productPrice[]" value={price} />
        ))}

        {data.productCount.map((count, index) => (
          <input key={index} name="productCount[]" value={count} />
        ))}

        <input name="clientFirstName" value={data.clientFirstName} />

        <input name="clientLastName" value={data.clientLastName} />

        <input name="clientAddress" value={data.clientAddress} />

        <input name="clientCity" value={data.clientCity} />

        <input name="clientEmail" value={data.clientEmail} />

        <input name="defaultPaymentSystem" value={data.defaultPaymentSystem} />

        <input name="merchantSignature" value={hashed_value} />

        <input type="submit" value="Test" />
      </form> */
