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


def apply_discount_cents(subtotal: int, discount_code: str | None = None, discounts: dict[str, float] | None = None) -> int:
    if discount_code is None:
        return subtotal
    discounts = discounts or {}
    if discount_code not in discounts:
        raise ValueError(f"unknown discount code: {discount_code}")
    pct = discounts[discount_code]
    if pct < 0 or pct > 1:
        raise ValueError("discount percentage must be between 0 and 1")
    return max(0, round(subtotal * (1 - pct)))


def tax_cents(subtotal: int, tax_rate: float) -> int:
    if tax_rate < 0:
        raise ValueError("tax rate cannot be negative")
    return round(subtotal * tax_rate)


def total_cents(items: list[LineItem], tax_rate: float, discount_code: str | None = None, discounts: dict[str, float] | None = None) -> int:
    subtotal = subtotal_cents(items)
    discounted = apply_discount_cents(subtotal, discount_code, discounts)
    return discounted + tax_cents(discounted, tax_rate)
