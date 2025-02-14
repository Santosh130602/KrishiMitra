import numpy as np
import matplotlib.pyplot as plt

# Define parameters
theta = np.linspace(0, 2 * np.pi, 1000)  # Angle values
k = 10  # Number of petals (change this for different patterns)
r = np.sin(k * theta)  # Rose curve equation

# Convert to Cartesian coordinates
x = r * np.cos(theta)
y = r * np.sin(theta)

# Plot the rose
plt.figure(figsize=(6, 6))
plt.plot(x, y, color='red', linewidth=2)
plt.fill(x, y, color='pink', alpha=0.5)  # Fill color for aesthetics
plt.axis("equal")  # Keep the aspect ratio square
plt.title(f"Rose Curve with {k} Petals")
plt.show()