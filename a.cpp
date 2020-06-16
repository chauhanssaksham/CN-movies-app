#include <queue>
using namespace std;

class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int K) {
        int dp[n][n];
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                dp[i][j]=-1;
            }
            
        }
        for(vector<int> f:flights){
          dp[f[0]][f[1]]=f[2];
        }

        priority_queue<vector<int>,vector<vector<int>>,greater<vector<int>>> pq;
        
    
        vector<int> temp;
        temp.push_back(0);
        temp.push_back(src);
        temp.push_back(K+1);
        
        pq.push(temp);
        
        
        while(!pq.empty())
        {
            
            vector<int> kk=pq.top();
            pq.pop();
            
            int a=kk[0];
            int node=kk[1];
            int c=kk[2];
            
            
            
            if(node==dst)
                return a;
            
            
            if(c>0)
            {
                
                
                for(int i=0;i<n;i++)
                {
                    if(dp[node][i]!=-1)
                    {
                        
                        pq.push({dp[node][i]+a,i,c-1});
                    }                      
                    
                }
                
                
            }
            
            
            
        }
        
            
    
     return -1;    
        
    }
};