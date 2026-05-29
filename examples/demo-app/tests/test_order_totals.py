import pytest

from src.order_totals import LineItem, subtotal_cents, tax_cents, total_cents


def test_subtotal_cents():
    items = [LineItem("abc", 2, 500), LineItem("xyz", 1, 250)]
    assert subtotal_cents(items) == 1250


def test_tax_cents_rounds():
    assert tax_cents(1250, 0.0825) == 103


def test_total_cents():
    items = [LineItem("abc", 2, 500), LineItem("xyz", 1, 250)]
    assert total_cents(items, 0.0825) == 1353


def test_negative_quantity_rejected():
    with pytest.raises(ValueError):
        subtotal_cents([LineItem("bad", -1, 100)])
