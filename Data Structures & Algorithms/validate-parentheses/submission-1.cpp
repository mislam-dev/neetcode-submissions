#include <stack>
class Solution
{
public:
  bool isValid(string str)
  {
    std::stack<char> st;

    for (char c : str)
    {
      if (c == '(' || c == '{' || c == '[')
      {
        st.push(c);
      }
      else
      {
        if (st.empty())
          return false;
        char v = st.top();
        if (c == ')' && v != '(')
        {
          return false;
        }
        else if (c == '}' && v != '{')
        {
          return false;
        }
        else if (c == ']' && v != '[')
        {
          return false;
        }
        st.pop();
      }
    }
    if (st.empty())
      return true;
    else
      return false;
  }
};