export async function getData() {
  try {
    const response = await fetch("https://w3yz.com/api/ch");

    const data = await response.json();

    return data.products
      .map((item) => item.imagelist?.[0])
      .filter((item) => item);
  } catch (error) {
    console.log(error);
  }
}
