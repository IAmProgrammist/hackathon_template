import unittest

from src.main.server.main import cool_func

class MyTestCase(unittest.TestCase):
    def test_something(self):
        self.assertEqual(cool_func(), "Hi")  # add assertion here


if __name__ == '__main__':
    unittest.main()
