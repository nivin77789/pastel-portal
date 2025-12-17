import PageLayout from "@/components/PageLayout";
import { Package, AlertTriangle, TrendingUp, Archive } from "lucide-react";

const products = [
  { name: "Wireless Headphones", sku: "WH-001", stock: 245, status: "In Stock", price: "$99.99" },
  { name: "USB-C Cable", sku: "UC-102", stock: 12, status: "Low Stock", price: "$19.99" },
  { name: "Bluetooth Speaker", sku: "BS-203", stock: 89, status: "In Stock", price: "$149.99" },
  { name: "Phone Case", sku: "PC-304", stock: 0, status: "Out of Stock", price: "$29.99" },
  { name: "Laptop Stand", sku: "LS-405", stock: 156, status: "In Stock", price: "$79.99" },
];

const Inventory = () => {
  return (
    <PageLayout 
      title="Inventory" 
      subtitle="Track and manage your stock"
      accentColor="bg-icon-orange"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Package, label: "Total Products", value: "1,234", color: "bg-icon-orange" },
          { icon: Archive, label: "In Stock", value: "1,089", color: "bg-icon-green" },
          { icon: AlertTriangle, label: "Low Stock", value: "98", color: "bg-icon-yellow" },
          { icon: TrendingUp, label: "Total Value", value: "$284K", color: "bg-icon-blue" },
        ].map((stat, i) => (
          <div 
            key={i}
            className="glass-card rounded-2xl p-5 opacity-0 animate-fade-in"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="p-6 border-b border-border/50 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Product List</h3>
          <button className="px-4 py-2 bg-icon-orange text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            Add Product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/30">
              <tr className="text-left text-sm text-muted-foreground">
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium">SKU</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {products.map((product, i) => (
                <tr key={i} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4 text-muted-foreground font-mono text-sm">{product.sku}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'In Stock' ? 'bg-icon-green/20 text-icon-green' :
                      product.status === 'Low Stock' ? 'bg-icon-yellow/20 text-icon-yellow' :
                      'bg-icon-red/20 text-icon-red'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
};

export default Inventory;
