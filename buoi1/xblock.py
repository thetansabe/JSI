from numbers import Integral


class CounterXBlock(XBlock):
    """
    TO-DO: document what your XBlock does.
    """

    # Fields are defined on the class.  You can access them in your code as
    # self.<fieldname>.

    count = Integral(
        default=0, scope=Scope.user_state,
        help="A simple counter, to show something happening",
    )

