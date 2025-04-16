import pandas as pd

try:
    df = pd.read_csv('sales_data_2.csv')
except FileNotFoundError:
    print("Error: The file 'sales_data.csv' was not found.")
    exit()

pivot_df = df.pivot_table(index=['State', 'Item'], columns='Date', values='Sales')

pivot_df = pivot_df.reset_index()

print(pivot_df)

pivot_df.to_csv('sales_data.csv', index=False)
print("\nConverted data saved to 'sales_data.csv'")