from dataclasses import dataclass


@dataclass(frozen=True)
class LineItem:
    sku: str
    quantity: int
    unit_price_cents: int


def subtotal_cents(items: list[LineItem]) -> int:
    total = 0
    for item in items:
        if item.quantity < 0:
            raise ValueError("quantity cannot be negative")
        if item.unit_price_cents < 0:
            raise ValueError("unit price cannot be negative")
        total += item.quantity * item.unit_price_cents
    return total


def tax_cents(subtotal: int, tax_rate: float) -> int:
    if tax_rate < 0:
        raise ValueError("tax rate cannot be negative")
    return round(subtotal * tax_rate)


def total_cents(items: list[LineItem], tax_rate: float) -> int:
    subtotal = subtotal_cents(items)
    return subtotal + tax_cents(subtotal, tax_rate)


if __name__ == "__main__":
    items = [LineItem("abc", 2, 500), LineItem("xyz", 1, 250)]
    print(total_cents(items, 0.0825))
